json.user do
  json.login_id @user.login_id
  json.name     @user.name
  json.email    @user.email
  json.avatar   @user.avatar.attached? ? url_for(@user.avatar) : nil
end
