from django.http import JsonResponse, Http404
from rest_framework import serializers
from rest_framework.response import Response

from .models import Corporation, Board, Zone, Ward, Designation, Department, Staff, Tariff, AccountDetail, Payment


class CorporationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corporation
        fields = ('corporation_id',
                  'name',
                  'address',
                  'city',
                  'district',
                  'pincode',
                  'email',
                  'helpline'
                  )


class BoardSerializer(serializers.ModelSerializer):
    corporation_name = serializers.ReadOnlyField(source='corporation.name')

    class Meta:
        model = Board
        fields = ('board_id',
                  'name',
                  'address',
                  'office_number',
                  'corporation',
                  'corporation_name',
                  )


class ZoneSerializer(serializers.ModelSerializer):
    corporation_name = serializers.ReadOnlyField(source='corporation.name')

    class Meta:
        model = Zone
        fields = ('zone_id',
                  'name',
                  'address',
                  'code',
                  'office_number',
                  'email_id',
                  'corporation',
                  'corporation_name',
                  )


class WardSerializer(serializers.ModelSerializer):
    zone_name = serializers.ReadOnlyField(source='zone.name')

    class Meta:
        model = Ward
        fields = ('ward_id',
                  'name',
                  'city',
                  'zone',
                  'zone_name',
                  )


class DepartmentSerializer(serializers.ModelSerializer):
    corporation_name = serializers.ReadOnlyField(source='corporation.name')

    class Meta:
        model = Department
        fields = ('dept_id',
                  'name',
                  'code',
                  'email',
                  'description',
                  'phone_number',
                  'corporation',
                  'corporation_name',
                  )


class StaffSerializer(serializers.ModelSerializer):
    department_name = serializers.ReadOnlyField(source='dept.name')
    ward_name = serializers.ReadOnlyField(source='ward.name')

    class Meta:
        model = Staff
        fields = ('staff_id',
                  'name',
                  'city',
                  'email',
                  'phone_number',
                  'address',
                  'ward',
                  'ward_name',
                  'dept',
                  'department_name',

                  )


class DesignationSerializer(serializers.ModelSerializer):
    staff_name = serializers.ReadOnlyField(source='staff.name')

    class Meta:
        model = Designation
        fields = ('desi_id',
                  'name',
                  'code',
                  'description',
                  'staff',
                  'staff_name'
                  )


class TariffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tariff
        fields = ('tariff_ID',
                  'tariff_name',
                  'min_charge',
                  'above_charge',
                  'rate',
                  'min_KL'
                  )


class AccountDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountDetail
        fields = ('account_id',
                  'account_name',
                  'account_number',
                  'branch_name',
                  'bank_name',
                  'pin',
                  'bank_city'
                  )


