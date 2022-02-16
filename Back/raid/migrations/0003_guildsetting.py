# Generated by Django 3.2.12 on 2022-02-07 13:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('guild', '0001_initial'),
        ('raid', '0002_alter_bossinfo_weak'),
    ]

    operations = [
        migrations.CreateModel(
            name='GuildSetting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('magnificationA', models.FloatField(default=1.0)),
                ('magnificationB', models.FloatField(default=1.0)),
                ('magnificationC', models.FloatField(default=1.0)),
                ('magnificationD', models.FloatField(default=1.0)),
                ('magnificationStartDate', models.DateField()),
                ('magnificationEndDate', models.DateField()),
                ('guild', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='guild.guild')),
                ('raid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='raid.raidinfo')),
            ],
        ),
    ]