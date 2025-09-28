"use server";

import { signIn, signOut, auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getBookings } from "@/app/_lib/data-service";

export async function signInAction(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn("credentials", { email, password, redirectTo: "/account" });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      return { error: "Invalid email or password." };
    } else {
      console.error("An unexpected error occurred:", error);
      throw error;
    }
  }
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

  const { error } = await supabase
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

export async function updateReservation(formData) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to update your reservation");

  const id = Number(formData.get("reservationId"));

  const guestBookings = await getBookings(session.user.guestId);
  const booking = guestBookings.find((b) => b.id === id);
  if (!booking) throw new Error("Booking not found");

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${id}`);
  redirect("/account/reservations");
}

export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to create a booking");

  const newBooking = {
    ...bookingData,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
    guestId: session.user.guestId,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
