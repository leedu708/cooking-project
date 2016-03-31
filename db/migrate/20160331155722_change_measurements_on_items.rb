class ChangeMeasurementsOnItems < ActiveRecord::Migration
  def change
    remove_column :items, :amount

    add_column :items, :weight, :integer
    add_column :items, :volume, :integer
  end
end
