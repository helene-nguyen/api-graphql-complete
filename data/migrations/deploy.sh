#* Export variables d'environnements
export PGUSER=oresto
export PGPASSWORD=oresto
### !!! don't forget to put your password in PGPASSWORD 

#* Deploy Global :
sqitch deploy -d oresto oresto_v1
# sqitch deploy -d oresto oresto_v2
