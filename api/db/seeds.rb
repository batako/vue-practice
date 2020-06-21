# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ユーザ作成
[
  {email: 'example1@example.com', password: 'password', login_id: 'example1', name: 'user-name-1'},
  {email: 'example2@example.com', password: 'password', login_id: 'example2', name: 'user-name-2'},
  {email: 'example3@example.com', password: 'password', login_id: 'example3', name: 'user-name-3'},
].each{|user, arr|
  User.find_or_initialize_by(email: user[:email]) \
    .update(
      password: user[:password],
      password_confirmation: user[:password],
      login_id: user[:login_id],
    )
}
