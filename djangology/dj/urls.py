from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
#from django.contrib import admin
#admin.autodiscover()

urlpatterns = patterns('',
    # Example:
    # Uncomment the next line to enable the admin:
    #(r'^admin/c/', include('django.contrib.admindocs.urls')),
    (r'^project/upload/(?P<project_id>\d+)/$', 'dj.views.upload_file'),
    (r'^project/upload/$', 'dj.views.upload_file'),
    (r'^project/$', 'dj.views.projectList'),
    (r'^projectEdit/(?P<project_id>\d+)/$', 'dj.views.projectEdit'),
    (r'^saveAnnotationType/(?P<project_id>\d+)/$', 'dj.views.saveAnnotationType'),
    (r'^saveAnnotationType/$', 'dj.views.saveAnnotationType'),
    (r'^projectEdit/$', 'dj.views.projectEdit'),
    (r'^projectDelete/$', 'dj.views.projectDelete'),
    (r'^projectSave/$', 'dj.views.projectSave'),
    (r'^projectSaveDocuments/$', 'dj.views.projectSaveDocuments'),
    (r'^project/delete-all-annotations/(?P<project_id>\d+)/$', 'dj.views.deleteAllAnnotations'),
   
    # upload an xml or zip file containing annotations
    (r'^project/upload-annotations-xml/(?P<project_id>\d+)/$', 'dj.views.upload_annotations_file'),

    # export an xml file containing annotations
    (r'^project/export-annotations-xml/(?P<document_id>\d+)/$', 'dj.views.export_annotations_xml'),

    # exports a zip file containing annotations
    (r'^project/export-project-xml/(?P<project_id>\d+)/$', 'dj.views.export_project_xml'),

    # export abner input
    #(r'^project/export-abner/(?P<project_id>\d+)/$', 'dj.views.export_abner'),
    #(r'^project/export-abner/(?P<project_id>\d+)/(?P<doc_id>\d+)/$', 'dj.views.export_abner'),
    # import abner input
    #(r'^project/import-abner/(?P<project_id>\d+)/(?P<user_id>\d+)/(?P<doc_id>\d+)/$', 'dj.views.import_abner'),

    (r'^editAnnotator/(?P<annotator_id>\d+)/$', 'dj.views.editAnnotator'),
    (r'^editAnnotator/$', 'dj.views.editAnnotator'),
    (r'^deleteAnnotator/$', 'dj.views.deleteAnnotator'),
    (r'^iaa/(?P<annotator_id1>\d+)/(?P<annotator_id2>\d+)/(?P<project_id>\d+)/$', 'dj.views.iaaStats'),
    (r'^listAnnotations/(?P<annotator1_id>\d+)/(?P<annotator2_id>\d+)/(?P<project_id>\d+)/(?P<exact>\d)/(?P<infoType>\d+)/(?P<annotationName>.+)/$', 'dj.views.listAnnotations'),
    (r'^iaa/', 'dj.views.iaaStats'),
    (r'^docCompare/(?P<document_id>\d+)/(?P<annotator_id1>\d+)/(?P<annotator_id2>\d+)/$', 'dj.views.docCompare'),
    (r'^index/$', 'dj.views.index'),   
    (r'^documents/(?P<document_id>\d+)/(?P<annotator_id>\d+)/$', 'dj.views.documentByAnnotator'),
    (r'^documents/(?P<document_id>\d+)/$', 'dj.views.documentByAnnotator'),
    (r'^documents/submit/$', 'dj.views.docSubmit'),
    (r'^documents/$', 'dj.views.start'),
    (r'^accounts/login/$', 'django.contrib.auth.views.login', {'template_name':'dj/login.html'}),
	(r'^$', 'django.contrib.auth.views.login', {'template_name':'dj/login.html'}),
	(r'^accounts/logout/$', 'django.contrib.auth.views.logout', {'template_name':'dj/logout.html'}),
    (r'^annotations/new/$', 'dj.views.newAnnotation'),   
    (r'^annotations/update/$', 'dj.views.updateAnnotation'),
)

