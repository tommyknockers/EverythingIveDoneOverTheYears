package ner_testing;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Main {
	public static void main(String[] args) {
		Boolean train = false;
		Boolean run = false;
		
		for (String arg : args) {
			if (arg.equals("--train"))
				train = true;
			
			if (args.equals("--run"))
				run = true;
		}
		
		String globalPath = ".";
		
		String mmPath               = "",
			   tags                 = "",
			   modelPath            = "",
			   docToBeAnnotatedPath = "",
			   abnerOutputPath      = "";
		
		BufferedReader params;
		try {
			params = new BufferedReader(new FileReader(globalPath + "/params.txt"));
			
			mmPath               = globalPath + params.readLine();
			tags                 = globalPath + params.readLine();
			modelPath            = globalPath + params.readLine();
			docToBeAnnotatedPath = globalPath + params.readLine();
			abnerOutputPath      = globalPath + params.readLine();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		if (train) {
			// train abner
			abner.Trainer aTrain = new abner.Trainer();
			
			ArrayList<String> m_Tags = new ArrayList<String>();
			
			BufferedReader mTags;
			try {
				mTags = new BufferedReader(new FileReader(tags));
				String line;
				while ((line = mTags.readLine()) != null) {
					m_Tags.add(line);
				}
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("Couldn't use tags file, falling back to default list.");
				
				m_Tags.add("Character");
				m_Tags.add("TitleOrGame");
				m_Tags.add("Franchise");
				m_Tags.add("Company");
				m_Tags.add("People");
				m_Tags.add("Object");
				m_Tags.add("Platform");
				m_Tags.add("O");
			}
			
			aTrain.train(mmPath, modelPath, (String[])m_Tags.toArray());
			
			System.out.println("Finished");
			
			if (!run)
				return;
		}
		
		//// if we are at this point, we're not training abner
		abner.Tagger aTag = new abner.Tagger(new File(modelPath));
				
		//// read in the document to be annotated
		BufferedReader br;
		String cleanText = ""; // could be renamed
		// could be simplified
		try {
			br = new BufferedReader(new FileReader(docToBeAnnotatedPath));
			String line;
			while ((line = br.readLine()) != null) {
				cleanText += line;
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//// run abner on document to annotate and get annotations
		String abnerOutput = aTag.tagABNER(cleanText);
		
		//// save new annotations
		BufferedWriter bw;
		try {
			bw = new BufferedWriter(new FileWriter(abnerOutputPath));
			bw.write(abnerOutput);
			bw.close();
			
			System.out.println("Output written to: " + abnerOutput);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println("Finished");
	}
}

