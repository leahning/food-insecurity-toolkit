import csv

input_file = 'snap.csv'
output_file = 'snap_cleaned.csv'

with open(input_file, newline='', encoding='utf-8') as infile, open(output_file, 'w', newline='', encoding='utf-8') as outfile:
    # encoding set to utf-8 to handle special characters from internet/USDA
    
    reader = csv.DictReader(infile)
    fieldnames = ['Store Name', 'Street Number', 'Street Name', 'City', 'State', 'Zip Code', 'Latitude', 'Longitude']
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    
    writer.writeheader()
    
    for row in reader:
        # skip if missing lat/lon or has an end date (meaning that it's not an active SNAP retailer anymore)
        # if not active, line would end in a ',' to signify empty end date
        if row['Latitude'] in ('0', '', None) or row['Longitude'] in ('0', '', None):
            continue
        if row['End Date'].strip() != '': # not empty and has an end date, so skip
            continue
        if row['Store Name'].strip() == '' or row['Street Name'].strip() == '' or row['City'].strip() == '':
            continue
        
        cleaned_row = {
            'Store Name': row['Store Name'].strip(),
            'Street Number': row['Street Number'].strip(),
            'Street Name': row['Street Name'].strip(),
            'City': row['City'].strip(),
            'State': row['State'].strip(),
            'Zip Code': row['Zip Code'].strip(),
            'Latitude': row['Latitude'].strip(),
            'Longitude': row['Longitude'].strip()
        }
        writer.writerow(cleaned_row)