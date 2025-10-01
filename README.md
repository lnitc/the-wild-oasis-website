**English follows Japanese** 
<br></br>

# ザ・ワイルド・オアシス 🏕️
ザ・ワイルド・オアシス (The Wild Oasis) へようこそ。これは、イタリアの豪華なキャビンの閲覧と予約管理を行うためのフルスタック Web アプリケーションです。このプロジェクトは、フロントエンドに Next.js、バックエンドに Supabase を使用した、モダンな Web 開発スタックのデモンストレーションです。

## ©️ 謝辞
このプロジェクトは、**Jonas Schmedtmann** 氏による [The Ultimate React Course 2025: React, Next.js, Redux & More](https://www.udemy.com/course/the-ultimate-react-course/) コースの一環であるトレーニングアプリをベースにしています。オリジナルのアーキテクチャ、デザインパターン、サンプルコードに関するすべてのクレジットは、コースの著者に帰属します。このリポジトリは、私個人の学習と実践のためだけのものです。

## ✨ プロジェクトについて
The Wild Oasis は、ユーザーが美しく人里離れたキャビンを探し、空室状況を確認し、予約を行うことができるデモンストレーションプロジェクトです。認証されたユーザーは、自身の個人プロファイルの管理や、今後の滞在予定の確認・変更ができます。全体の体験がシームレスで直感的になるように設計されています。

このアプリケーションは **Next.js App Router** で構築され、**Tailwind CSS** でスタイリングされています。ユーザー認証は **Auth.js (NextAuth)** によって処理され、ユーザー情報、キャビン、予約を含むすべてのデータは **Supabase** データベースに保存・管理されます。

## 🚀 主な機能
* **キャビンの閲覧**: 利用可能なすべての豪華なキャビンのリストを、詳細な説明と画像付きで表示します。
* **ユーザー認証**: Auth.js によるシンプルなサインイン機能。
* **予約管理**: 認証されたユーザーは、自身の予約を作成、更新、削除できます。
* **個人アカウントページ**: ユーザーは自身の個人プロフィール情報を管理できます。
* **日付管理**: `react-day-picker`を利用したインタラクティブなカレンダーで、簡単に日付を選択できます。
* **キャビンデータ用APIエンドポイント**: キャビンID（1〜8）によってキャビンデータを JSON 形式で取得するための公開 [API エンドポイント](https://the-wild-oasis-website-lnitc.vercel.app/api/cabins/1)。

## 🛠️ 技術スタック
このプロジェクトは、モダンでパワフルな以下の技術スタックを使用して構築されています：
* **フレームワーク**: [Next.js](https://nextjs.org/)
* **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
* **データベース & バックエンド**: [Supabase](https://supabase.io/)
* **認証**: [Auth.js (NextAuth.js v5)](https://authjs.dev/)
* **日付処理**: [date-fns](https://date-fns.org/) & [React Day Picker](https://react-day-picker.js.org/)
* **アイコン**: [Heroicons](https://heroicons.com/)

## 👤 デモの URL およびログイン情報

**[デモを閲覧する](https://the-wild-oasis-website-lnitc.vercel.app/)**

ライブアプリケーションにてログインが必要な機能を試すには、以下のダミーユーザーアカウントをご利用いただけます：

**ユーザー1:**
* **メールアドレス:** `wald_hanz@meinefirma.de`
* **パスワード:** `565dfgkj!RTY`

**ユーザー2:**
* **メールアドレス:** `oashisu_j@kaisha.jp`
* **パスワード:** `kl5471!ZA091`
  
---
<br></br>

# The Wild Oasis 🏕️
Welcome to The Wild Oasis, a full-stack web application for browsing and managing reservations for luxury cabins in Italy. This project demonstrates a modern web development stack using Next.js for the frontend and Supabase for the backend.

## ©️ Acknowledgements
This project is based on a training app as part of [The Ultimate React Course 2025: React, Next.js, Redux & More](https://www.udemy.com/course/the-ultimate-react-course/) by **Jonas Schmedtmann**. All credit for the original architecture, design patterns, and sample code goes to the course author.  This repository is solely for my personal learning and practice.

## ✨ About The Project
The Wild Oasis is a demonstration project where users can explore beautiful, isolated cabins, check their availability, and make reservations. Authenticated users can manage their personal profiles and view or modify their upcoming stays. The entire experience is designed to be seamless and intuitive.  

This application is built with the **Next.js App Router** and styled with **Tailwind CSS**. User authentication is handled by **Auth.js (NextAuth)**, and all data, including user info, cabins, and reservations, is stored and managed in a **Supabase** database.

## 🚀 Features
* **Browse Cabins**: View a complete list of all available luxury cabins with detailed descriptions and images.
* **User Authentication**: Simple sign-in functionality provided by Auth.js.
* **Reservation Management**: Authenticated users can create, update, and delete their reservations.
* **Personalized Account Area**: Users can manage their personal profile information.
* **Date Management**: An interactive calendar powered by `react-day-picker` for easy date selection.
* **API endpoint for cabin data**: A public [API endpoint](https://the-wild-oasis-website-lnitc.vercel.app/api/cabins/1) to obtain cabin data in JSON format by cabin id (1-8).

## 🛠️ Tech Stack
This project is built using a modern and powerful tech stack:
* **Framework**: [Next.js](https://nextjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Database & Backend**: [Supabase](https://supabase.io/)
* **Authentication**: [Auth.js (NextAuth.js v5)](https://authjs.dev/)
* **Date Handling**: [date-fns](https://date-fns.org/) & [React Day Picker](https://react-day-picker.js.org/)
* **Icons**: [Heroicons](https://heroicons.com/)

## 👤 Demo URL and Login Credentials

**[View Live Demo](https://the-wild-oasis-website-lnitc.vercel.app/)** 

To explore the authenticated features of the live application, you can use the following dummy user accounts:

**User 1:**
* **Email:** `wald_hanz@meinefirma.de`
* **Password:** `565dfgkj!RTY` 

**User 2:**
* **Email:** `oashisu_j@kaisha.jp` 
* **Password:** `kl5471!ZA091` 
