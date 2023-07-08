# TRPGer_Calendar
### This is calendar for TRPG player.
1. You can schedule quickly.
2. You don't have to write many times.
3. We will support your TRPG life forever.

## Page Detail
### 1. index.pug(main screan)
- header
    - logo? -> main
    - My Calendar
    - The schedule you made
- body
    - Participating Calendar List(card list)
    - button(right-lower) -> Create Schedule
- footer
    - It is created by ...
### 2. Sign.pug
- header
    - None
- body
    - form(userId, password)
    - discription
    - button -> SignUp
        - password(check)
        - Terms of Use
        - button -> SignIn
    - button -> SignIn
### 3. MyPage.pug
- header
    - logo? -> main
    - My Calendar
    - The schedule you made
- body
    - UserCalendar
    - button(edit) -> reload and editFlag
### 4. The Schedule You Made
- header
    - logo? -> main
    - My Calendar
    - The schedule you made
- body
    - Schedule You Made(card list) -> delete, edit, 
    
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