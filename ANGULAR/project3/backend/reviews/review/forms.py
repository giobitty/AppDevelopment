from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['product_name', 'user_name', 'rating', 'comment']
        widgets = {
            'comment': forms.Textarea(attrs={'rows': 4, 'cols': 40}),
        }
