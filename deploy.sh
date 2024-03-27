echo "switching to branch master"
git checkout master

echo "Building app...."
npm run build

echo "Deploying files to server....."
#scp -r build/* root@139.162.225.178:/var/www/139.162.225.178/

echo "Done!"