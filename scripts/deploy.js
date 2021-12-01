const deploy = async () =>{

    // Ethers está accesible globalmente
    // así que podemos obtener el firmante con ethers.getSigners()
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contract with the account: ', deployer.address );

    // Debemos obtener el contrato con el nombre exacto del fichero .sol
    const SpainPunks = await ethers.getContractFactory('SpainPunks');
    const deployed = await SpainPunks.deploy('10000');

    console.log('SpainPunks is deployed at: ', deployed.address);
}


// Ejecutamos deploy  haciendo exit y console log si falla
deploy()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});         