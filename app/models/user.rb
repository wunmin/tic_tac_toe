class User < ActiveRecord::Base
  validates :username, uniqueness: {case_sensitive: false}, length: { minimum: 5 }
  validates :password, length: { minimum: 5 }

  def self.authenticate(username, password)
    @user = User.find_by_username(username)
    if @user == []
      nil
    elsif @user.password == password
      @user
    else
      nil
    end
  end

end
