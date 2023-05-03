from django.shortcuts import render

from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Corporation, Board, Zone, Ward, Designation, Department, Staff, Tariff, AccountDetail, Payment
from .serializers import BoardSerializer, ZoneSerializer, WardSerializer, StaffSerializer, DepartmentSerializer, DesignationSerializer, TariffSerializer, AccountDetailSerializer, CorporationSerializer
from django.http.response import Http404


class CorporationView(APIView):

    def post(self, request):
        data = request.data
        serializer = CorporationSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Corporation Added Successfully", safe=False)
        return JsonResponse("Failed to Add Corporation", safe=False)

    def get_corporation(self, pk):
        try:
            student = Corporation.objects.get(corporation_id=pk)
            return student
        except Corporation.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_corporation(pk)
            serializer = CorporationSerializer(data)
        else:
            data = Corporation.objects.all()
            serializer = CorporationSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Corporation.objects.get(corporation_id=pk)
        serializer = CorporationSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Corporation updated Successfully", safe=False)
        return JsonResponse("Failed To Update Corporation")

    def delete(self, request, pk):
        student_to_delete = Corporation.objects.get(corporation_id=pk)
        student_to_delete.delete()
        return JsonResponse("Corporation Deleted Successfully", safe=False)


class BoardView(APIView):

    def post(self, request):
        data = request.data
        serializer = BoardSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Board Added Successfully", safe=False)
        return JsonResponse("Failed to Add Board", safe=False)

    def get_board(self, pk):
        try:
            student = Board.objects.get(board_id=pk)
            return student
        except Corporation.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_board(pk)
            serializer = BoardSerializer(data)
        else:
            data = Board.objects.all()
            serializer = BoardSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Board.objects.get(board_id=pk)
        serializer = BoardSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Board updated Successfully", safe=False)
        return JsonResponse("Failed To Update Board")

    def delete(self, request, pk):
        student_to_delete = Board.objects.get(board_id=pk)
        student_to_delete.delete()
        return JsonResponse("Board Deleted Successfully", safe=False)


class ZoneView(APIView):

    def post(self, request):
        data = request.data
        serializer = ZoneSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Zone Added Successfully", safe=False)
        return JsonResponse("Failed to Add Zone", safe=False)

    def get_zone(self, pk):
        try:
            student = Zone.objects.get(zone_id=pk)
            return student
        except Zone.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_zone(pk)
            serializer = ZoneSerializer(data)
        else:
            data = Zone.objects.all()
            serializer = ZoneSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Zone.objects.get(zone_id=pk)
        serializer = ZoneSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Zone updated Successfully", safe=False)
        return JsonResponse("Failed To Update Zone")

    def delete(self, request, pk):
        student_to_delete = Zone.objects.get(zone_id=pk)
        student_to_delete.delete()
        return JsonResponse("Zone Deleted Successfully", safe=False)


class WardView(APIView):

    def post(self, request):
        data = request.data
        serializer = WardSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Ward Added Successfully", safe=False)
        return JsonResponse("Failed to Add Ward", safe=False)

    def get_ward(self, pk):
        try:
            student = Ward.objects.get(ward_id=pk)
            return student
        except Ward.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_ward(pk)
            serializer = ZoneSerializer(data)
        else:
            data = Ward.objects.all()
            serializer = WardSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Ward.objects.get(ward_id=pk)
        serializer = WardSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Ward updated Successfully", safe=False)
        return JsonResponse("Failed To Update Ward")

    def delete(self, request, pk):
        student_to_delete = Ward.objects.get(ward_id=pk)
        student_to_delete.delete()
        return JsonResponse("Ward Deleted Successfully", safe=False)


class DepartmentView(APIView):

    def post(self, request):
        data = request.data
        serializer = DepartmentSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Department Added Successfully", safe=False)
        return JsonResponse("Failed to Add Department", safe=False)

    def get_department(self, pk):
        try:
            student = Department.objects.get(dept_id=pk)
            return student
        except Department.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_department(pk)
            serializer = DepartmentSerializer(data)
        else:
            data = Department.objects.all()
            serializer = DepartmentSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Department.objects.get(dept_id=pk)
        serializer = DepartmentSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Department updated Successfully", safe=False)
        return JsonResponse("Failed To Update Department")

    def delete(self, request, pk):
        student_to_delete = Department.objects.get(dept_id=pk)
        student_to_delete.delete()
        return JsonResponse("Department Deleted Successfully", safe=False)


class StaffView(APIView):

    def post(self, request):
        data = request.data
        serializer = StaffSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Staff Added Successfully", safe=False)
        return JsonResponse("Failed to Add Staff", safe=False)

    def get_staff(self, pk):
        try:
            student = Staff.objects.get(staff_id=pk)
            return student
        except Ward.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_staff(pk)
            serializer = StaffSerializer(data)
        else:
            data = Staff.objects.all()
            serializer = StaffSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Staff.objects.get(staff_id=pk)
        serializer = StaffSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Staff updated Successfully", safe=False)
        return JsonResponse("Failed To Update Staff")

    def delete(self, request, pk):
        student_to_delete = Ward.objects.get(staff_id=pk)
        student_to_delete.delete()
        return JsonResponse("Staff Deleted Successfully", safe=False)


class DesignationView(APIView):

    def post(self, request):
        data = request.data
        serializer = DesignationSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Designation Added Successfully", safe=False)
        return JsonResponse("Failed to Add Designation", safe=False)

    def get_designation(self, pk):
        try:
            student = Ward.objects.get(desi_id=pk)
            return student
        except Ward.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_designation(pk)
            serializer = DesignationSerializer(data)
        else:
            data = Designation.objects.all()
            serializer = DesignationSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Designation.objects.get(desi_id=pk)
        serializer = DesignationSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Designation updated Successfully", safe=False)
        return JsonResponse("Failed To Update Designation")

    def delete(self, request, pk):
        student_to_delete = Designation.objects.get(desi_id=pk)
        student_to_delete.delete()
        return JsonResponse("Designation Deleted Successfully", safe=False)


class TariffView(APIView):

    def post(self, request):
        data = request.data
        serializer = TariffSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Tariff Added Successfully", safe=False)
        return JsonResponse("Failed to Add Tariff", safe=False)

    def get_tariff(self, pk):
        try:
            student = Tariff.objects.get(tariff_ID=pk)
            return student
        except Tariff.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_tariff(pk)
            serializer = TariffSerializer(data)
        else:
            data = Tariff.objects.all()
            serializer = TariffSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Tariff.objects.get(tariff_ID=pk)
        serializer = TariffSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Tariff updated Successfully", safe=False)
        return JsonResponse("Failed To Update Tariff")

    def delete(self, request, pk):
        student_to_delete = Tariff.objects.get(tariff_ID=pk)
        student_to_delete.delete()
        return JsonResponse("Tariff Deleted Successfully", safe=False)


class AccountView(APIView):

    def post(self, request):
        data = request.data
        serializer = AccountDetailSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Account Added Successfully", safe=False)
        return JsonResponse("Failed to Add Account", safe=False)

    def get_account(self, pk):
        try:
            student = AccountDetail.objects.get(account_id=pk)
            return student
        except AccountDetail.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_account(pk)
            serializer = AccountDetailSerializer(data)
        else:
            data = AccountDetail.objects.all()
            serializer = AccountDetailSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = AccountDetail.objects.get(account_id=pk)
        serializer = AccountDetailSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Account updated Successfully", safe=False)
        return JsonResponse("Failed To Update Account")

    def delete(self, request, pk):
        student_to_delete = AccountDetail.objects.get(account_id=pk)
        student_to_delete.delete()
        return JsonResponse("Account Deleted Successfully", safe=False)


class PaymentView(APIView):

    def post(self, request):
        data = request.data
        serializer = PaymentSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Payment Added Successfully", safe=False)
        return JsonResponse("Failed to Add Payment", safe=False)

    def get_payment(self, pk):
        try:
            student = Payment.objects.get(payment_id=pk)
            return student
        except Payment.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_payment(pk)
            serializer = PaymentSerializer(data)
        else:
            data = Payment.objects.all()
            serializer = PaymentSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        student_to_update = Payment.objects.get(payment_id=pk)
        serializer = PaymentSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Payment updated Successfully", safe=False)
        return JsonResponse("Failed To Update Payment")

    def delete(self, request, pk):
        student_to_delete = Payment.objects.get(payment_id=pk)
        student_to_delete.delete()
        return JsonResponse("Payment Deleted Successfully", safe=False)
