#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
# Operating System s a built-in Python module & allows Python to talk to Windows/Linux.
# Without os Python cannot know things like: Environment variables, file paths, current folder
import os
# system => built-in Python module. It gives Python information about how the program was started.
# eg: we type :python manage.py runserver & Pythons tores: sys.argv
    # becomes: 
    # [
        # 'manage.py',
        # 'runserver'     OR migarte
        # ]
import sys


#  def main() => creates function namaed: main {ThINK main=> start everything}
def main():
    """Run administrative tasks."""
    # os.environ = stores environetal varibales eg: os.environ["PATH"]
    # tells Django: ypur setting is here: config/settings.py
    # without this line, Django has no idea; 
        # which database to use
        # which apps exist
        # where URLs are
        # anything
    # it tells where to find confiigurtaion
    os.environ.setdefault(
        'DJANGO_SETTINGS_MODULE', 
        'config.settings'
        )
    try:
        # This imports Django's command manager.
        # It understands commands like;
            # runserver
            # migtae
            # createsuperuser
            # startapp
            # makemigrations
        # Without this function, manage.py wouldn't know what to do.
        from django.core.management import execute_from_command_line
    # if django not installed error
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    
    # reads command (eg; python manage.py runserver and etc) 
    # then, sys.argv =>  [
                            # 'manage.py',
                            # 'runserver'
                            # ]
    # then Djnago reads: runserver & starts development server
    execute_from_command_line(sys.argv)

# Running the file directly → call main().
# Importing the file → don't call main().
if __name__ == '__main__':
    main()
