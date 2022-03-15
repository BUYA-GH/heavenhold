# Generated by Django 3.2.12 on 2022-03-15 13:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('guild', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('gamecode', models.CharField(max_length=10, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('guild', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='guild.guild')),
                ('guild_member', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='guild.guildmember')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
