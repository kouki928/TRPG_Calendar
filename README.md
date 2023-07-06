# TRPGer_Calendar
### This is calendar for TRPG player.
1. You can schedule quickly.
2. You don't have to write many times.
3. We will support your TRPG life forever.

## Function to be implemented
- Sign In, Sign Out
- Sign Up
- My Calendar
- Participating Calendars
- Create Schedule
- Schedule List

## DB Setting
### 1. User
- userId -> str
- PassWord -> str
- CalendarId -> list
### 2. Calendar
- CalendarId -> str
- ParticipatingUser -> list
- Editor -> str
- title -> str
- discription -> str
- schedule -> dict