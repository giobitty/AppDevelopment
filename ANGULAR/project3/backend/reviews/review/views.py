from django.shortcuts import render, redirect
from .forms import ReviewForm  # Assuming you have a ReviewForm class
from .models import Review 

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save()
            return redirect('success')
    else:
        form = ReviewForm()
    return render(request, 'review/submit_review.html', {'form': form})

def success(request):
    return render(request, 'review/success.html')
