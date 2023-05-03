from django.urls import path
from .views import CorporationView, BoardView, ZoneView, WardView, DepartmentView, DesignationView, StaffView, \
    TariffView, AccountView, PaymentView

urlpatterns = [
    path('corporation/', CorporationView.as_view()),
    path('corporation/<int:pk>/', CorporationView.as_view()),
    path('board/', BoardView.as_view()),
    path('board/<int:pk>/', BoardView.as_view()),
    path('zone/', ZoneView.as_view()),
    path('zone/<int:pk>/', ZoneView.as_view()),
    path('ward/', WardView.as_view()),
    path('ward/<int:pk>/', WardView.as_view()),
    path('department/', DepartmentView.as_view()),
    path('department/<int:pk>/', DepartmentView.as_view()),
    path('designation/', DesignationView.as_view()),
    path('designation/<int:pk>/', DesignationView.as_view()),
    path('staff/', StaffView.as_view()),
    path('staff/<int:pk>/', StaffView.as_view()),
    path('tariff/', TariffView.as_view()),
    path('tariff/<int:pk>/', TariffView.as_view()),
    path('account/', AccountView.as_view()),
    path('account/<int:pk>/', AccountView.as_view()),
    path('payment/', PaymentView.as_view()),
    path('payment/<int:pk>/', PaymentView.as_view())

]
