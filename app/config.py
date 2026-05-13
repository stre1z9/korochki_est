import os
class Config:
    SECRET_KEY = 'super_secret_key'
    SQLALCHEMY_DATABASE_URI = ('postgresql://postgres:root@localhost/korochki_est')
    SQLALCHEMY_TRACK_MODIFICATIONS = False