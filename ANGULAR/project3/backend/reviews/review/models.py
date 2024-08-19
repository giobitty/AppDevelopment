from django.db import models

class Review(models.Model):
    product_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)]) 
     # Rating from 1 to 5
    comment = models.TextField(blank=True)  # Optional 
    created_at = models.DateTimeField(auto_now_add=True)  
    # Timestamp for when the review was created

    def __str__(self):
        return f'Review of {self.product_name} by {self.user_name} - Rating: {self.rating}'
