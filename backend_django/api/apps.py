from django.apps import AppConfig

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        import sys
        from django.core.management import call_command
        if 'runserver' in sys.argv:
            try:
                call_command('makemigrations', interactive=False)
                call_command('migrate', interactive=False)
            except Exception as e:
                print("Migration error:", e)
