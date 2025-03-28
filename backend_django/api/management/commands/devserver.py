from django.core.management.base import BaseCommand
from django.core.management import call_command

class Command(BaseCommand):
    help = 'Run server with automatic migrations'

    def handle(self, *args, **kwargs):
        call_command('makemigrations', interactive=False)
        call_command('migrate', interactive=False)
        call_command('runserver')
