create table content(id int primary key, data jsonb not null);
create table submissions(id bigserial primary key, kind text, data jsonb, created_at timestamptz default now());
alter table content enable row level security;
alter table submissions enable row level security;
create policy "public read" on content for select using (true);
create policy "admin write" on content for all to authenticated using (true) with check (true);
create policy "anyone can submit" on submissions for insert with check (true);
create policy "admin reads" on submissions for select to authenticated using (true);
