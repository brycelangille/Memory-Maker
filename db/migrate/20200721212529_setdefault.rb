class Setdefault < ActiveRecord::Migration[6.0]
  def change
    change_column_default(:users, :image_url, "https://i.stack.imgur.com/l60Hf.png")
  end
end
