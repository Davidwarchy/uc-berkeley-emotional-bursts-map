import os
import shutil

# Specify the directory containing the mp3 files
source_directory = '.'

# Loop through all files in the directory
for filename in os.listdir(source_directory):
    if filename.endswith(".mp3"):
        # Split the filename into name and number
        name, number = filename.split('-')
        
        # Create the target directory if it doesn't exist
        target_directory = os.path.join(source_directory, name)
        if not os.path.exists(target_directory):
            os.makedirs(target_directory)
        
        # Create the new filename for the mp3 file
        new_filename = f"{number}"
        
        # Move the file to the target directory with the new filename
        shutil.move(os.path.join(source_directory, filename), 
                    os.path.join(target_directory, new_filename))

print("Files have been successfully organized.")
