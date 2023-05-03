from django.contrib import admin
from .models import *
# Register your models here.
models_list = [Corporation,Board,Zone,Ward,Department,Staff,Designation,Tariff,Payment,AccountDetail]
admin.site.register(models_list)