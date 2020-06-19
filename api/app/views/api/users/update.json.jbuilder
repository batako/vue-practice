json.user do
  json.login_id = @user.login_id
  json.name     = @user.name
  json.email    = @user.email
  json.avatar   = @user.avatar.attached? ? @user.avatar_base64 : nil
end