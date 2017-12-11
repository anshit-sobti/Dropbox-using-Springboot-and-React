package com.service;

import com.entity.CreateShareFolder;
import com.entity.GroupT;
import com.entity.Sharewith;
import com.entity.User;
import com.repository.UserRepository;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    public File[] getAllUsers1(String userfolder) {
        File folder = new File("./"+userfolder);
        File[] listOfFiles = folder.listFiles();
       System.out.println("Userfolder is:"+userfolder);
        System.out.println("File list:"+listOfFiles);
        return listOfFiles;

    }

    public List<User> login(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public void store(MultipartFile file) {
        // TODO Auto-generated method stub

    }

    public void addUser(User user) {
        userRepository.save(user);
        String folder = user.getEmail();
        new File("./" + folder).mkdir();

    }

    public boolean deletefile(String filename, String userFolder) {
        // TODO Auto-generated method stub
        Path deleter = Paths.get("./" + userFolder + "/" + filename);
        System.out.println(deleter);

        try {
            if (Files.deleteIfExists(deleter)) {
                System.out.println("File deleted successfully");
                return true;
            }

        } catch (IOException e) {
            // TODO Auto-generated catch block
            System.out.println("Internal Server Error");
            e.printStackTrace();
        }

        return false;
    }

    public void uploader(MultipartFile file, String userfolder) {
        // TODO Auto-generated method stub

        try {
            byte[] bytes = file.getBytes();

            Path path = Paths.get("./" + userfolder + "/" + file.getOriginalFilename());
            Files.write(path, bytes);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public boolean sharefile(Sharewith sharewith) {
        // TODO Auto-generated method stub
        Set<GroupT> aaj = userRepository.findById(1).get(0).getGroupt();

        System.out.println(aaj.size());
        System.out.println("aaj");
        System.out.println(sharewith.getEmails());
        String userFolder = sharewith.getOwner();//take from session email
        Path src = Paths.get("./user1");
        String Test = "Test";
        Path linkinto = Paths.get("./" + Test + "/" + sharewith.getFilename());
        String[] shareinfo = sharewith.getEmails().split(",");
        for (String i : shareinfo) {
            //     Files.createLink(target, link);
            Path dest = Paths.get("./" + i + "/" + sharewith.getFilename());
            System.out.println("In for loop");
            try {
                Files.createSymbolicLink(dest, src);
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }

        return false;
    }


    public void createShareFolder(CreateShareFolder createShareFolder, String sharefolder){

        new File("./"+sharefolder + "/" + createShareFolder.getFoldername()).mkdir();
        Path src = Paths.get("./"+sharefolder + "/" + createShareFolder.getFoldername());
        String Test = "Test";

        String[] shareinfo = createShareFolder.getEmails().split(",");
        for (String i : shareinfo) {
            Path dest = Paths.get("./" + i + "/" + createShareFolder.getFoldername());
            System.out.println("In for loop");
            try {
                Files.createSymbolicLink(dest, src);
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }

        }



    public void createFolder(CreateShareFolder createShareFolder, String sharefolder){

        new File("./"+sharefolder + "/" + createShareFolder.getFoldername()).mkdir();

    }


}


