public with sharing class FileManagerController {
    
    @AuraEnabled
    public static List<SObject> getRecords(String obj) {
        return Database.query('SELECT Id, Name FROM '+obj+' ORDER BY Name');
    }

    @AuraEnabled
    public static SObject getRecord(String obj, String id, String fields) {
        String q = 'SELECT '+ fields +' FROM '+obj +' WHERE Id = \''+Id+'\'';
        return Database.query(q);
    }

}