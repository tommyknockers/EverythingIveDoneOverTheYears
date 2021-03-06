from django.db import models
from django import forms
from django.contrib.auth.models import User
from django.contrib.contenttypes import generic
from django.core.files import File
from django.contrib import admin
from django.core.urlresolvers import reverse

from dj.widgets import ColorPickerWidget
from dj.urls import patterns

class ColorField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 10
        super(ColorField, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        kwargs['widget'] = ColorPickerWidget
        return super(ColorField, self).formfield(**kwargs)

class Annotator(User):
    documents = models.ManyToManyField("Document", blank=True)
    admin = models.BooleanField()
    def __str__(self):
        return ''.join((self.first_name, self.last_name, '-' + self.username))

class Project(models.Model):
    annotators = models.ManyToManyField("Annotator", blank=True)
    name = models.CharField(max_length=300)
    allow_chains = models.BooleanField()
    def get_absolute_url(self): # returns the url for admin interface
        return '/dj/project/%s/' % (self.id)
    def __str__(self):
        return self.name

class Document(models.Model):
    text = models.TextField()
    create_date = models.DateTimeField()
    title = models.TextField()
    project = models.ForeignKey(Project)
    def __str__(self):
        return ' | '.join([self.title, str(self.project)])
    def get_absolute_url(self, annotator_id=None):
        if not annotator_id:
            return reverse('dj.views.documentByAnnotator', args=[self.id])
        else:
            return reverse('dj.views.documentByAnnotator', args=[self.id, annotator_id])

class Submission(models.Model):
    document = models.ForeignKey(Document)
    annotator = models.ForeignKey(Annotator)
    submit_date = models.DateTimeField('date submitted', null=True, blank=True)
         

class DocumentInlineForm(forms.ModelForm):
    title = forms.CharField(max_length=50, label="Title")
    class Meta:
        model = Document

class DocumentInline(admin.TabularInline):
    model = Document
    form = DocumentInlineForm
    extra = 1

class AnnotationType(models.Model):
    type = models.CharField(max_length=200)
    description = models.TextField()
    #color = models.CharField(max_length=6)
    #color = ColorField()
    color = ColorField(blank=True) 
    project = models.ForeignKey(Project)
    def __str__(self):
        return self.type

class AnnotationTypeForm(forms.ModelForm):
    color = ColorField()
    description = forms.CharField(max_length=50, label="Description")
    class Meta:
        model = AnnotationType

class AnnotationTypeInline(admin.TabularInline):
    model = AnnotationType
    form = AnnotationTypeForm
    extra = 1

class Annotation(models.Model):
    document = models.ForeignKey(Document)
    annotation = models.CharField(max_length=3000)
    annotation_type = models.ForeignKey(AnnotationType, null=True, blank=True)
    begin_index = models.IntegerField()
    end_index = models.IntegerField()
    annotator=models.ForeignKey(Annotator)

class AnnotationChain(models.Model):
    document = models.ForeignKey(Document)
    annotations=models.ManyToManyField("Annotation", blank=True)
    name = models.CharField(null=True,blank=True,max_length=400)
    
class AnnotatorForm(forms.ModelForm):
    class Meta:
        model = Annotator
        exclude = ('documents', 'user_permissions','groups','admin','staff_status')       
    password = forms.CharField( widget=forms.PasswordInput, label="Password" )



