from django.db import models

class employee(models.Model):
	firstname = models.CharField(max_length=200)
	lastname  = models.CharField(max_length=200)
	emp_id = models.IntegerField()

	def __str__(self):
		return self.firstname

 	
