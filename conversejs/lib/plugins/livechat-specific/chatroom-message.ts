// SPDX-FileCopyrightText: 2024 John Livingston <https://www.john-livingston.fr/>
//
// SPDX-License-Identifier: AGPL-3.0-only

export function chatRoomMessageOverrides (): {[key: string]: Function} {
  return {
    /* By default, ConverseJS groups messages from the same users for a 10 minutes period.
     * This make no sense in a livechat room. So we override isFollowup to ignore. */
    isFollowup: function isFollowup () { return false }
  }
}
