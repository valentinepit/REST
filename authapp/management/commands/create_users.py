from django.contrib.auth.management.commands import createsuperuser
from django.core.management import CommandError, BaseCommand
from authapp.models import User

DEFAULT_USERS = [
    {"Smollet": ["Capitan", "smollet@ispaniyola.cap", "capitan"]},
    {"Livsy": ["Doctor", "smyle@ispaniyola.doc", "doctor"]},
    {"Silver": ["John", "john@pirate.bay", "okorok"]}
]


class Command(BaseCommand):
    help = 'Crate default users'

    def handle(self, *args, **options):

        for user in DEFAULT_USERS:
            for name, values in user.items():
                User.objects.create_user(username=name,
                                         first_name=values[0],
                                         last_name=name,
                                         email=values[1],
                                         password=values[2],
                                         )
