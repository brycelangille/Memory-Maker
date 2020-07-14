class User < ApplicationRecord
  has_secure_password
  validates :password, length: { minimum: 6 }, on: :create
 has_many :posts,  dependent: :destroy
  has_many :comments, dependent: :destroy
end
