class ChangeItemAmountsToStrings < ActiveRecord::Migration
  def change
    change_column :items, :weight, :string
    change_column :items, :volume, :string
  end
end
