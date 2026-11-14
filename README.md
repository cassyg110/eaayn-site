# EAAYAN website: three ways to manage content
Deploy: push this folder to GitHub and import it in Vercel (no build settings needed), or drag the folder into Vercel/Netlify.
Choose the mode in `config.js`.

## 1. JSON file (`source:"json"`)
Edit `content.json`, commit, Vercel redeploys. Add a country by adding `{"country":"Ethiopia","whatsapp":"https://chat.whatsapp.com/..."}` to `chapters.list`.

## 2. Google Sheet (`source:"sheet"`)
1. Make a sheet with tabs `chapters` (columns: country, whatsapp), `programs` and `focus` (columns: icon, title, text). Row 1 = column names exactly.
2. Share > "Anyone with the link: Viewer".
3. Put the sheet ID in `config.js` as `sheetId`. Adding a row adds a card. Everything else still comes from `content.json`.

## 3. Database + admin login (`source:"supabase"`)
1. Create a free project at supabase.com. In the SQL editor, run `supabase.sql`.
2. Authentication > Users > Add user (your admin email + password). Turn OFF "Allow new users to sign up" so only you can log in.
3. Put the Project URL and the anon key in `config.js`.
4. Open `/admin.html`, log in, edit all content, press Save. The first save creates the content row from `content.json`.
5. Join, contact and newsletter submissions are saved in the `submissions` table (Table Editor). `jf` = join, `cf` = contact.
Never put the service_role key in config.js.
