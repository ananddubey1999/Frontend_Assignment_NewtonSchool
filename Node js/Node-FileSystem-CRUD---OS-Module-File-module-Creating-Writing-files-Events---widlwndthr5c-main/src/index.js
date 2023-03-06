const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(`${fileName}`,`${fileContent}`,(err)=>{
		 if(err){
			console.log(err.message);
		}
	} )
}

const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    console.log(`Successfully read from ${fileName}: ${data}`);
    return data;
  } catch (error) {
    console.error(`Error reading from ${fileName}: ${error}`);
  }
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(`${fileName}`, `${fileContent}`, (err)=>{
		if(err){
			console.log(err.message);
		}
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(`${fileName}`, (err)=>{
		if(err){
			console.log(err.message);
		}
	})
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
