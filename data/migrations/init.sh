
#~ Création d'un script via les commandes POSTGRES

export PGUSER=postgres

#* 1 - Création d'un utilisateur en BDD (with login)
# createuser [option_connexion...] [option...] [nom_utilisateur]
createuser -l -P oresto
# Reviens à faire : createuser --login --password --pwprompt oresto

#* 2 - Création d'une BDD ainsi que le propriétaire
# createdb [option_connexion...] [option...] [nombase] [description]
createdb -O oresto oresto
# Reviens à faire : createdb --owner=oresto oresto

#* 3 - Initialiser Sqitch
sqitch init oresto --engine pg

#* 4 - Création d'une version 1 pour la BDD
sqitch add oresto_v1 -n "01 - Créations des tables"