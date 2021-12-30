package newdemo;

import java.io.File;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping(path="/ServerSide")
public class FileBrowser {
    
    
    private List<String> files= new ArrayList<>();
    private File ParentDirectory = new File("src/main/java/newdemo/ServerShare");
    
    // The browse function below works like the command line browse system where you go back using ./ and going into files by specifying
    // the name of sub folders tahtg existin the folder you are in. If you enter a sub folder that is not contained in the current folder
    // then you won't be able to access it.

    @GetMapping(path="/functions")
    public @ResponseBody List<String> Browse(String directoryName) {
        files.clear();
        File[] fileList = ParentDirectory.listFiles();

            if (fileList != null) {
                for (File file : fileList) {
                    if (file.isFile() || file.isDirectory()) {
                        files.add(file.getName());
                    }
                }
                return files;
            }
        files.clear();
        return files;
    }
    

}

