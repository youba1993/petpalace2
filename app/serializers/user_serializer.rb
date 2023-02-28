class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email
  attribute :created_date do |user|
    user && user.created_at.strftime('%d/%m/%Y')
end
end
