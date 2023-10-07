from django import forms
from .models import UserIformation

class UserInfoForm(forms.ModelForm):

    class Meta:
        model = UserIformation
        
        fields = [
            'name',
            'number'

        ]