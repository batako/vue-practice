json.attachments @articles do |article|
  json.extract!(article,
    :id,
    :created_at,
  )
end
