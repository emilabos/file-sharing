
using System;
using System.Text;
using System.Collections.Generic;
using System.Collections;

namespace AESEncryption
{
    class Program
    {
        public static void Main(string[] args)
        {
        byte[] key = Encoding.ASCII.GetBytes("Thats my Kung Fu"); 
        byte[] plaintext = Encoding.ASCII.GetBytes("Two One Nine Two");

        byte[] encrypted = AES.Encrypt(plaintext, key);
        byte[] decrypted = AES.Decrypt(encrypted, key);

        Console.WriteLine("Encrypted: " + BitConverter.ToString(encrypted));
        Console.WriteLine("Decrypted: " + Encoding.ASCII.GetString(decrypted));
        }
    }
}