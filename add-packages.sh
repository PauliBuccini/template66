git clone git@github.com:PauliBuccini/momentas.git packages/moment
git clone git@github.com:SpaceBlocks/meteor-simple-schema.git packages/simple-schema

meteor add moment

meteor add simple-schema

git clone git@github.com:SpaceBlocks/meteor-autoform.git packages/autoform
cd packages/autoform
git checkout ui
cd ..
cd ..

meteor add autoform