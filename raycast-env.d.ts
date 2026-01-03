/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Test Token - Your Raindrop.io test token from app.raindrop.io/settings/integrations */
  "testToken": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-bookmarks` command */
  export type SearchBookmarks = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-bookmarks` command */
  export type SearchBookmarks = {}
}

