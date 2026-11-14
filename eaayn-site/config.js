/* Choose where the site gets its content:
   "json"     -> content.json (edit the file, then redeploy)
   "sheet"    -> Google Sheet for chapters/programs/focus areas, rest from content.json
   "supabase" -> database + admin login at /admin.html, and form submissions are saved */
window.EAAYAN_CONFIG={
  source:"json",
  sheetId:"",   /* the long ID in your Google Sheet link */
  sheetTabs:{chapters:"chapters",programs:"programs",focus:"focus"},
  supabaseUrl:"",  /* https://xxxx.supabase.co */
  supabaseKey:""   /* the public "anon" key, never the service_role key */
};
