class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |game|
      game.integer :player1_id
      game.integer :player2_id
      game.integer :winner_id
      game.boolean :started, default: false
      game.timestamps
    end
  end
end
