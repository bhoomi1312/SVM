from django.db import models


# Create your models here.
class Corporation(models.Model):
    corporation_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    pincode = models.PositiveIntegerField()
    email = models.EmailField(max_length=50)
    helpline = models.PositiveBigIntegerField()




class Board(models.Model):
    board_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    office_number = models.PositiveBigIntegerField()
    corporation = models.ForeignKey(Corporation, on_delete=models.CASCADE)


class Zone(models.Model):
    zone_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    office_number = models.PositiveBigIntegerField()
    email_id = models.EmailField(max_length=50, blank=True, unique=True)
    corporation = models.ForeignKey(Corporation, on_delete=models.CASCADE)


class Ward(models.Model):
    ward_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE)


class Department(models.Model):
    dept_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, blank=True, unique=True)
    description = models.CharField(max_length=50)
    phone_number = models.PositiveBigIntegerField()
    corporation = models.ForeignKey(Corporation, on_delete=models.CASCADE)



class Staff(models.Model):
    staff_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, blank=True, unique=True)
    phone_number = models.PositiveBigIntegerField()
    address = models.CharField(max_length=100)
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    dept = models.ForeignKey(Department, on_delete=models.CASCADE)




class Designation(models.Model):
    desi_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)




class Tariff(models.Model):
    tariff_ID = models.AutoField(primary_key=True)
    tariff_name = models.CharField(max_length=100)
    min_charge = models.DecimalField(max_digits=10, decimal_places=2)
    above_charge = models.DecimalField(max_digits=10, decimal_places=2)
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    min_KL = models.DecimalField(max_digits=10, decimal_places=2)


class AccountDetail(models.Model):
    account_id = models.AutoField(primary_key=True)
    account_name = models.CharField(max_length=100)
    account_number = models.CharField(max_length=50)
    branch_name = models.CharField(max_length=100)
    bank_name = models.CharField(max_length=100)
    pin = models.CharField(max_length=10)
    bank_city = models.CharField(max_length=50)


class Payment(models.Model):

    PAYMENT_TYPE_CHOICES = [
        ('credit_card', 'Credit Card'),
        ('debit_card', 'Debit Card'),
        ('net_banking', 'Net Banking'),
        ('cash', 'Cash'),
    ]

    payment_id = models.AutoField(primary_key=True)
    payment_type = models.CharField(choices=PAYMENT_TYPE_CHOICES, default='cash', max_length=20)
    date_of_payment = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    account = models.ForeignKey(AccountDetail, on_delete=models.CASCADE)
