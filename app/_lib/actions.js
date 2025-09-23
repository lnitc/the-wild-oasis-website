"use server";

import { signIn, signOut, auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "@/app/_lib/data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update your profile");

  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const nationalID = formData.get("nationalID");

  const regex = /^[a-zA-Z0-9]{6,12}$/;

  if (!regex.test(nationalID)) throw new Error("Invalid National ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to delete your reservation");

  // Check if the booking exists(security measure)
  const guestBookings = await getBookings(session.user.guestId);
  const booking = guestBookings.find((b) => b.id === bookingId);
  if (!booking) throw new Error("Booking not found");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}
