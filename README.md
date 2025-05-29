## 📬 Gmail to LINE Bot (Times CAR Notifier)

**Gmailの特定メールをLINEに通知するGASスクリプト**

This Google Apps Script project checks for emails with the subject "**【Times CAR】**" and sends the content to your LINE account using the LINE Messaging API.
このGoogle Apps Scriptは、件名「【Times CAR】」のメールを検出し、LINEに通知します（LINE Messaging API使用）。

---

## 🔒 Secrets are managed securely via Script Properties

**トークンやIDはスクリプトプロパティで安全に管理**

**No tokens or personal IDs are hard-coded in the script.**
All sensitive data (access tokens, user IDs) are securely stored using Google Apps Script's [PropertiesService](https://developers.google.com/apps-script/reference/properties/properties-service).
スクリプト内にはトークンやIDなどの個人情報は含まれていません。
GASの[PropertiesService](https://developers.google.com/apps-script/reference/properties/properties-service)を使用し、安全に管理しています。

---

## 🚀 Features / 機能

* Monitors Gmail inbox for messages with subject: `【Times CAR】`
  Gmailの受信トレイから「【Times CAR】」という件名のメールを監視
* Sends a summary of unprocessed emails to LINE
  未処理のメール要約をLINEに通知
* Labels emails as "Processed" to avoid duplicates
  処理済みメールには「Processed」ラベルを付け、再通知を防止

---

## 🔧 Setup / セットアップ手順

### 1. Copy or clone this project into your own Google Apps Script project

このリポジトリを自分のGASプロジェクトにコピーまたはクローン

### 2. Configure Script Properties / スクリプトプロパティの設定

GASエディタで以下の手順を実施：

1. `ファイル > プロジェクトのプロパティ > スクリプトのプロパティ` に移動
2. 以下のプロパティを追加：

| Name                   | Value             | 内容                |
| ---------------------- | ----------------- | ----------------- |
| `LINE_MESSAGING_TOKEN` | あなたのLINE Botのトークン | LINE Botのアクセストークン |
| `LINE_USER_ID`         | あなたのLINEユーザーID    | 通知を送るLINEユーザーのID  |

---

### 3. Enable required scopes / 必要な権限の確認

使用API：

* `GmailApp`
* `UrlFetchApp`
* `PropertiesService`

追加のAPI有効化は不要です。

---

## 🧪 Optional: Test the function / 動作確認（任意）

GASエディタで `getMail` 関数を手動実行し、LINEに通知が届くかを確認してください。

---
